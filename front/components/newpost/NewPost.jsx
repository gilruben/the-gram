import React from 'react';
import FileInput from 'react-file-input';
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
    if(target === 'img'){
      let file = e.target.files[0]

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
  },
  handleClick(e){
    document.getElementsByClassName('image-chooser')[0].click()
	},
  render(){
    let img = this.state.img
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FileInput className="image-chooser" accept=".png,.gif,.jpg" onChange={this.handleChange.bind(this, 'img')} />

          <button type="button" onClick={this.handleClick}>{img ? 'Change Image' : 'New Post'}</button>

          <div id="image-preview"></div>

          {
            img ?
              <div>
                <textarea id="caption-input" onChange={this.handleChange.bind(this, 'caption')}></textarea>
              </div> : null
          }

          {img ? <button type="submit">Create</button> : null}
        </form>
      </div>
    )
  }
})

export default NewPost;
