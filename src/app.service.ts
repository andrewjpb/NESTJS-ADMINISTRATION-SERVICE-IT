import { Injectable } from '@nestjs/common';

export type returnProps = {
  ok: string;
};

@Injectable()
export class AppService {
  getHello(): returnProps {
    const env = process.env.HELLO;
    return { ok: `${env}` };
  }
}
