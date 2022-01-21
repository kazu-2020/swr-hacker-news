import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

export const displayDate = (time: number) => dayjs.unix(time).format('YYYY年M月D日HH:mm');
