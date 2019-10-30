import React, { Fragment } from 'react';

const Contact = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const onSubmit = () => {
  //   if (email === '' || message === '') {
  //     lang === 'en'
  //       ? M.toast({ html: 'Please enter your e-mail and message' })
  //       : M.toast({
  //           html: 'Пожалуйста, введите свои электронный адрес и сообщение'
  //         });
  //   } else {
  //     const newMessage = {
  //       name,
  //       email,
  //       message,
  //       date: new Date()
  //     };

  //     console.log(newMessage);

  //     contactMe(newMessage);

  //     lang === 'en'
  //       ? M.toast({
  //           html:
  //             'Your e-mail has been sent. I will contact you back as soon as possible'
  //         })
  //       : M.toast({
  //           html: 'Ваше письмо отправлено. Я отвечу Вам в ближайшее время'
  //         });

  //     // Clear Fields
  //     setName('');
  //     setEmail('');
  //     setMessage('');
  //   }
  // };

  return (
    <Fragment>
      <div className='fixed-action-btn'>
        <a
          href='#'
          className='btn-floating btn-large grey darken-1 modal-trigger'
        >
          <i className='large material-icons'>mail</i>
        </a>
        <ul>
          <li>
            <a
              href='https://t.me/alex_yal'
              className='btn-floating blue lighten-1 modal-trigger'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='material-icons telegram'>send</i>
            </a>
          </li>
          <li>
            <a
              href='mailto:yalalex.dev@gmail.com'
              className='btn-floating  modal-trigger'
            >
              <i className='material-icons'>mail_outline</i>
            </a>
          </li>
        </ul>
      </div>

      {/* <div id='contact' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h4>{lang === 'en' ? 'Contact Me' : 'Связаться со мной'}</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <label htmlFor='name' className='active'>
                {lang === 'en' ? 'Your Name' : 'Ваше имя'}
              </label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field'>
              <input
                type='email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor='email' className='active'>
                {lang === 'en' ? 'Your E-mail' : 'Ваша почта'}
              </label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <label htmlFor='message' className='active'>
                {lang === 'en' ? 'Your Message' : 'Ваше сообщение'}
              </label>
            </div>
          </div>

          <div className='modal-footer'>
            <a
              onClick={onSubmit}
              className='modal-close waves-effect blue waves-light btn'
            >
              {lang === 'en' ? 'Send' : 'Отправить'}
            </a>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Contact;
