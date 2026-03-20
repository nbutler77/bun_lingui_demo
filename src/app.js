import { useLingui } from "@lingui/react/macro";

export const App = () => {
  const {t} = useLingui();
  return (
    <Typography>{t`Hello, world!`}</Typography>
  );
};


