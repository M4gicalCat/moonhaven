export const NavBar = ({ setTheme }) => {
  return (
    <>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </>
  );
};
