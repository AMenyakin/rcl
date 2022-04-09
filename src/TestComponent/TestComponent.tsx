import cssClasses from './TestComponent.module.css';
import scssClasses from './TestComponent.module.scss';
import { TestComponentProps } from './TestComponent.types';

const TestComponent = ({ name }: TestComponentProps) => {
  const onChange = () => {
    throw Error('oops');
  };

  return (
    <div className={scssClasses.helloScss}>
      <p className={cssClasses.helloCss}>Hello, {name}</p>
      <input type="text" name={name} onChange={onChange} />
    </div>
  );
};

export default TestComponent;
