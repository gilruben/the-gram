import React from 'react';
import FileInput from 'react-file-input';
import {browserHistory} from 'react-router';
import $ from 'jquery';

const NewPost = React.createClass({
  getInitialState(){
    return {img: null, caption: ''}
  },
  handleFile(file){
    let imageType = /^image\//;

    if (!imageType.test(file.type)) {
      console.log(file.type);
      return;
    }

    var preview = document.getElementById('image-preview')
    preview.innerHTML = '';

    var img = document.createElement("img");
    img.className = "post-img";
    img.file = file;

    preview.appendChild(img);

    let reader = new FileReader();

    reader.onload = function(e) {
        img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  },
  handleChange(target, e){
    let file = e.target.files[0]

    if(target === 'img' && file){

      this.setState({img: file});

      this.handleFile(file)

    } else if(target === 'caption'){
      this.setState({caption: e.target.value});
    }
  },
  handleSubmit(e){
    e.preventDefault();

    let formData = new FormData()
    formData.append('post', this.state.img, this.state.img.name);
    formData.append('caption', this.state.caption);

    $.ajax({
      url: 'api/posts/',
      type: 'POST',
      cache: false,
      contentType: false,
      processData: false,
      data: formData
    })
    .done((data) => {
      var preview = document.getElementById('image-preview')
      preview.innerHTML = '';

      this.setState({img: null, caption: ''})
    })
  },
  handleClick(e){
    document.getElementsByClassName('image-chooser')[0].click()
	},
  render(){
    let img = this.state.img
    return (
      <div className="newPostPage">
        <form className="newPostForm" onSubmit={this.handleSubmit}>
          <FileInput className="image-chooser" accept=".png,.gif,.jpg" onChange={this.handleChange.bind(this, 'img')} />

          <div id="image-preview"></div>

            {
              img ?
                <div>
                  <textarea id="caption-input" placeholder="  Add Caption..." onChange={this.handleChange.bind(this, 'caption')} value={this.state.caption} />
                </div> : null
            }

          <div className= "submitButtons">
            {
              img ?
                <button className="changeButton" type="button" onClick={this.handleClick}>Change Image</button> :
                <button className="uploadButton" type="button" onClick={this.handleClick}>New Post</button>
            }

            {img ? <button className="postButton" type="submit">Post</button> : null}
          </div>

        </form>
      </div>
    )
  }
})

export default NewPost;
