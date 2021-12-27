import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap mb-5 '>
            <img className='profile-img' src={author} alt='author' />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='about-heading'>About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            esse a voluptas nemo commodi necessitatibus iure. Quasi laborum
            repudiandae incidunt eveniet amet nulla doloribus modi ipsam nihil
            vel doloremque sint aut labore delectus id, voluptatibus laboriosam
            optio obcaecati? Explicabo ipsam exercitationem quaerat! Magni
            omnis, suscipit sed quam doloribus illo! Deserunt temporibus non
            saepe veritatis nostrum voluptas a pariatur veniam dicta, sapiente,
            eveniet atque quisquam placeat labore nemo repudiandae? Maiores
            dolorem voluptate recusandae incidunt ducimus vero fugit nam
            nesciunt ad quibusdam, non aspernatur, iusto qui error totam
            sapiente! Repudiandae sit deleniti in repellat optio? Voluptate vero
            excepturi dignissimos. Eligendi, vitae facilis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
