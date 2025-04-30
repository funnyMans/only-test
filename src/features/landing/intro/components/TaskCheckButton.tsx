import Link from 'next/link';
import { TaskCheckBtnSC } from './styled/TaskCheckBtn';

const TaskCheckButton = () => {
  return (
    <Link href='/blog/dates'>
      <TaskCheckBtnSC>Check Task</TaskCheckBtnSC>
    </Link>
  );
};

export default TaskCheckButton;
