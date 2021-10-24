import { useHistory } from 'react-router-dom';

const BtnVolta = ({className}) => {
  const history = useHistory();
  return (
    <button className={className} onClick={() => {
      history.push("/hall");
      }}>Volta</button> 
  );
};

export default BtnVolta;