import { greet } from './greet';

describe('greet', ()=>{
    it('should include the name in the message',()=>{
        //expect(greet('mosh')).toBe('Welcome mosh'); //its specific and will crash
        expect(greet('mosh')).toContain('mosh');
    })

});