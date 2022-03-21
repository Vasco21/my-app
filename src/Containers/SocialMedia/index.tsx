import Linkedin from "../../Assets/Icons/linkedin.png";
import Twitter from "../../Assets/Icons/twitter.png";
import Github from "../../Assets/Icons/github.png";

export const SocialMedia: React.FC = (): JSX.Element => {
  return(
    <ul className="SocialMedia">
      <li>
        <a href="https://twitter.com/Qvary34">
          <img src={Twitter} alt="twitter" />
        </a>
      </li>

      <li>
        <a href="https://github.com/Vasco21">
        <img src={Github} alt="github" />
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/vasco-motlalepule-eti-154259193/">
        <img src={Linkedin} alt="linkedin" />
        </a>
      </li>
    </ul>
  )
}