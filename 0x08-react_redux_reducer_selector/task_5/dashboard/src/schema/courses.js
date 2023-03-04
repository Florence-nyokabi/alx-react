import { normalize, schema } from 'normalizr';

const courses = new schema.Entity('courses');
const coursesNormalizer = (data) => {
  const normalizedData = normalize(data, [courses]);
  return normalizedData.entities.courses;
};

export default coursesNormalizer;
