import { getCurrencies } from './getCurrencies';

describe('compute', () => {
    it('should the supported currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});
