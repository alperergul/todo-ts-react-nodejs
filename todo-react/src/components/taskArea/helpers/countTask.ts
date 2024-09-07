import { TaskCounterStatusType } from '../../taskCounter/interfaces/ITaskCounter';
import { ITaskApi } from '../interface/ITaskApi';

export const countTask = (
  tasks: ITaskApi[],
  status: TaskCounterStatusType,
): number => {
  if (!Array.isArray(tasks)) {
    return 0;
  }

  const totalTask = tasks.filter((task) => {
    return task.status === status;
  });

  return totalTask.length;
};
