import { Injectable } from '@nestjs/common';

export type returnProps = {
  ok: boolean;
};

@Injectable()
export class AppService {
  getHello(): returnProps {
    return { ok: true };
  }
}
