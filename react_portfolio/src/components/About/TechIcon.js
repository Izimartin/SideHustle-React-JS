/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TechIcon = ({imgIcon}) => {
  return(
    <div css={styles} style={{background: `url(${imgIcon}) no-repeat center/contain`}}>
    </div>
  )
}

const styles = css`
  width: 70px;
  height: 70px;
  @media (max-width: 750px) {
    width: 22%;
    margin: 24px 0 0 0;
  }
`;

export default TechIcon;