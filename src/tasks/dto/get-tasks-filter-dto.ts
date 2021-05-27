import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Taskstatus } from '../task.model';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(Taskstatus)
  status?: Taskstatus;

  @IsOptional()
  @IsString()
  search?: string;
}
