import React, {usr} from 'react'


interface LoginProps {
  onSubmit: (username: string, password: string) => void;
}
const LogIn: React.FC<LoginProps> = ({ onSubmit }) => {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LogIn