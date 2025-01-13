export default [
  {
    text: '今天',
    value: () => {
      const day = new Date();

      const start = day.setHours(0, 0, 0, 0);
      const end = day.setHours(23, 59, 59, 999);
      return [start, end];
    },
  },
  {
    text: '昨天',
    value: () => {
      const now = new Date();
      const yestoday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

      const start = yestoday.setHours(0, 0, 0, 0);
      const end = yestoday.setHours(23, 59, 59, 999);
      return [start, end];
    },
  },
  {
    text: '本周',
    value: () => {
      const now = new Date();
      const monday = new Date(now.getTime() - (now.getDay() - 1) * 24 * 59 * 59 * 1000);
      const sunday = new Date(monday.getTime() + 6 * 24 * 59 * 59 * 1000);

      const start = monday.setHours(0, 0, 0, 0);
      const end = sunday.setHours(23, 59, 59, 999);
      return [start, end];
    },
  },
  {
    text: '上周',
    value: () => {
      const now = new Date();
      const monday = new Date(now.getTime() - (now.getDay() - 1 + 7) * 24 * 59 * 59 * 1000);
      const sunday = new Date(monday.getTime() + 6 * 24 * 59 * 59 * 1000);

      const start = monday.setHours(0, 0, 0, 0);
      const end = sunday.setHours(23, 59, 59, 999);
      return [start, end];
    },
  },
  {
    text: '本月',
    value: () => {
      const now = new Date();
      const Y = now.getFullYear();
      const M = now.getMonth();

      const start = new Date(Y, M, 1).setHours(0, 0, 0, 0);
      const end = new Date(Y, M + 1, 0).setHours(23, 59, 59, 999);
      return [start, end];
    },
  },
  {
    text: '上个月',
    value: () => {
      const now = new Date();
      const Y = now.getFullYear();
      const M = now.getMonth();

      const start = new Date(Y, M - 1, 1).setHours(0, 0, 0, 0);
      const end = new Date(Y, M, 0).setHours(23, 59, 59, 999);
      return [start, end];
    },
  },
  {
    text: '近7天',
    value: () => {
      const now = new Date();

      const start = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0);
      const end = now.setHours(23, 59, 59, 999);
      return [start, end];
    },
  },
  {
    text: '近30天',
    value: () => {
      const now = new Date();

      const start = new Date(now.getTime() - 29 * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0);
      const end = now.setHours(23, 59, 59, 999);
      return [start, end];
    },
  },
];
