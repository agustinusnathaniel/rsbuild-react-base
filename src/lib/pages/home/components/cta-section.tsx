import { AiFillGithub } from 'react-icons/ai';

const repoName = 'rsbuild-react-base';
const repoLink = `https://github.com/agustinusnathaniel/${repoName}`;

export const CTASection = () => {
  return (
    <div>
      <div>
        <a
          aria-label="Deploy to Vercel"
          href={`https://vercel.com/import/git?s=${repoLink}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="Vercel deploy button" src="https://vercel.com/button" />
        </a>

        <a
          aria-label="Deploy to Netlify"
          href={`https://app.netlify.com/start/deploy?repository=${repoLink}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Netlify deploy button"
            src="https://www.netlify.com/img/deploy/button.svg"
          />
        </a>
      </div>

      <a
        href={`${repoLink}/generate`}
        rel="noopener noreferrer"
        target="_blank"
      >
        Use This Template
      </a>

      <div>
        <a href={repoLink} rel="noopener noreferrer" target="_blank">
          <AiFillGithub />
          Open in Github
        </a>
        <a href={repoLink} rel="noopener noreferrer" target="_blank">
          <img
            alt="github stars"
            src={`https://img.shields.io/github/stars/agustinusnathaniel/${repoName}?style=social`}
          />
        </a>
      </div>
    </div>
  );
};
