const Calculatrice = require("./calculatrice");

describe("calculatrice", () => {
    a = 5; b = 0;
    calc = new Calculatrice({ a, b });

    console.log(`${a} + ${b} =`+Calculatrice.add());
    console.log(`${a} - ${b} =`+Calculatrice.minus());
    console.log(`${a} * ${b} =`+Calculatrice.multiple());
    console.log(`${a} / ${b} =`+Calculatrice.div());

    it('addition', () => {
        expect(Calculatrice.add()).toEqual(calc.a + calc.b);
    });
    it('mutiple', () => {
        expect(Calculatrice.multiple()).toEqual(calc.a * calc.b);
    });
    it('minus', () => {
        expect(Calculatrice.minus()).toEqual(calc.a - calc.b);
    });
    describe('division', () => {
        describe('division =0', () => {

            it('diviseur == 0', () => {
                expect(Calculatrice.div()).toBe(false);
            });
        });
        describe('division !=0', () => {
            it('diviseur != 0', () => {
                a = 5; b = 2;
                calc = new Calculatrice({ a, b });
                expect(Calculatrice.div()).toEqual(calc.a / calc.b);
            });
        });

    });


})