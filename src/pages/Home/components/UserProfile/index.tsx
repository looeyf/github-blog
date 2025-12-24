import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGithubProfile } from '../../../../hooks/useGithubProfile';
import styles from './styles.module.scss';
import { CustomLink } from '../../../../components/CustomLink';

export function UserProfile() {
  const { profile } = useGithubProfile({ username: 'looeyf' });

  return (
    <article className={styles.userProfile}>
      <img
        className={styles.avatar}
        src={profile?.avatar_url}
        alt="placeholder"
      />

      <section className={styles.userInfo}>
        <header className={styles.header}>
          <h1>{profile.name}</h1>
          <CustomLink
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            icon="arrow-up-right-from-square"
          >
            GITHUB
          </CustomLink>
        </header>

        <p>{profile.bio}</p>

        <footer className={styles.footer}>
          <span>
            <FontAwesomeIcon icon={['fab', 'github']} /> {profile.login}
          </span>
          <span>
            <FontAwesomeIcon icon="building" /> {profile.company}
          </span>
          <span>
            <FontAwesomeIcon icon="user-group" /> {profile.followers} Seguidores
          </span>
        </footer>
      </section>
    </article>
  );
}
