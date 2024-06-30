import profile from './assets/profile.png';
import githubLogo from './assets/github.svg';
import linkedinLogo from './assets/linkedin.svg';
import xLogo from './assets/x.svg';
import instgramLogo from './assets/instgram.svg';
import './ProfileCard.css';

export default function ProfileCard({ user }) {

  const openUrl = (url) => {
    window.open(url, '_blank');  // Opens the URL in a new tab
  };

  const getLogo = (type) => {
    switch (type) {
      case 'github':
        return githubLogo;
      case 'linkedin':
        return linkedinLogo;
      case 'x':
        return xLogo;
      case 'instgram':
        return instgramLogo;
      default:
        return profile;
    }
  }

  return (
    <div className='profile-card'>
      <img src={profile} />
      <header>
        <section className='profile-contents'>
          <span className='profile-title'>{user.title}</span>
          <span className='profile-description'>{user.description}</span>
          <span className='profile-selfintro'>{user.selfIntro}</span>
        </section>
      </header>
      <section>
        <button onClick={() => { openUrl(user.contactMeUrl) }} className='contactme-button'>Contact me</button>
        <div className='contact-row'>
          {
            user.contacts.map(
              contact =>
                <button key={contact.type} className='contact-button' onClick={() => { openUrl(contact.url) }}>
                  <img src={getLogo(contact.type)}></img>
                </button>
            )
          }
        </div>
      </section>
    </div>
  )

}