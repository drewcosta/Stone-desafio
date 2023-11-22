import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export function formatDateTime(date: Date) {
  dayjs.locale('pt-br');
  return dayjs(date).format('DD [de] MMMM [de] YYYY [|] HH:mm:ss [UTC]');
}
