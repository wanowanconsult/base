import {initials} from './initials';

describe('getInitials()', () => {
    it('should return two letters for the initials of two word', () => {
        expect(initials('scope name')).toEqual('sn');
    });

    it('should return the two first letters if one word', () => {
        expect(initials('scope')).toEqual('sc');
    });

    it('should return undefined if the word is empty', () => {
        expect(initials('')).toBeUndefined();
    });
});
