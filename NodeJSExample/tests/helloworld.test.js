const hello = require('../src/helloworld')

    it('should return a greeting', () => {
        expect(hello()).toBe('Hello Connor')
    })
