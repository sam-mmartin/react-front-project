import Social from './social';

export default interface User {
    id: string;
    name: string;
    work: string;
    socialMedias: Social[];
}