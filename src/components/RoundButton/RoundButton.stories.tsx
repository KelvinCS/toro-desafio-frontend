import React from "react";
import RoundButton from "./index";

export default { title: "RoundButton" };

export const enabled = () => <RoundButton>Em Alta</RoundButton>;
export const disabled = () => <RoundButton disabled>Em Baixa</RoundButton>;

// export const withEmoji = () => (
//   <Button>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
