import * as data from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(data.default, [notification]);

const getAllNotificationsByUser = (userId) => {
  const result = [];
  const notifObj = normalizedData.entities.notifications;
  const messageObj = normalizedData.entities.messages;

  for (let key in notifObj) {
    if (notifObj[key].author === userId) {
      const contextId = notifObj[key].context;
      result.push(messageObj[contextId]);
    }
  }
  return result;
};

export default getAllNotificationsByUser;
