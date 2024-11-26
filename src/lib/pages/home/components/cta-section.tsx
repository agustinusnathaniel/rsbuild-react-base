import { AiFillGithub } from 'react-icons/ai';

const repoName = 'rsbuild-react-chakra-starter';
const repoLink = `https://github.com/agustinusnathaniel/${repoName}`;

export const CTASection = () => {
  return (
    <div>
      <div>
        <a
          aria-label="Deploy to Vercel"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://vercel.com/import/git?s=${repoLink}`}
        >
          <img src="https://vercel.com/button" alt="Vercel deploy button" />
        </a>

        <a
          aria-label="Deploy to Netlify"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://app.netlify.com/start/deploy?repository=${repoLink}`}
        >
          <img
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </a>
      </div>

      <a
        href={`${repoLink}/generate`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Use This Template
      </a>

      <div>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
          Open in Github
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <img
            src={`https://img.shields.io/github/stars/agustinusnathaniel/${repoName}?style=social`}
            alt="github stars"
          />
        </a>
      </div>
    </div>
  );
};
