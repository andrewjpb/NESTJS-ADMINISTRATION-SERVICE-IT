import { Injectable } from '@nestjs/common';


export type returnProps = {
  ok: Boolean
}

@Injectable()
export class AppService {
  getHello(): returnProps {
    return {ok:true};
  }
}
