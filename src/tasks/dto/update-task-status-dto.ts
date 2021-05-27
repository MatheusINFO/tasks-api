import { IsEnum } from 'class-validator';
import { Taskstatus } from '../task.model';

export class UpdateTaskStatusDto {
  @IsEnum(Taskstatus)
  status: Taskstatus;
}
