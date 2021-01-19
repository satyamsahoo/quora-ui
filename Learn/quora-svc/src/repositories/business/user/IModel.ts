import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IUserModel extends IVersionableDocument {
  id: string;
  name: string;
  email: string;
  password: string;
  profile_pic: string;
}
