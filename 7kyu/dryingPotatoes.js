/*
Drying Potatoes by g964

All we eat is water and dry matter.

Let us begin with an example:

John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter. The water content is 99 percent of the total weight. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.

At the output the water content is only 98%.

What is the total weight in kilograms (water content plus dry matter) coming out of the oven?

He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"

Can you help him?

Task
Write function potatoes with

int parameter p0 - initial percent of water-
int parameter w0 - initial weight -
int parameter p1 - final percent of water -
potatoesshould return the final weight coming out of the oven w1 truncated as an int.

Example:
potatoes(99, 100, 98) --> 50
*/

function potatoes(p0, w0, p1) {
    /* Calculate water lost during potato cookout.

    * Water lost => wL
    * New total weight => w1
    * Initial water weight = w0 * p0 / 100
    * New water weight = (w1 * p1 / 100)
        => ((w0 - wl) * p1) / 100 because w1 = w0 - wl
    * initial water weight - water lost = new water weight
        =>  (w0 * p0 / 100) - wL = ((w0 - wl) * p1) / 100
    * Solve for wl and we get wL = (w0 * (p1 - p0)) / (p1 - 100)
    * w1 = w0 - wL
         = w0 - (w0 * (p1 - p0)) / (p1 - 100)
    * Finally truncate any decimal by flooring.
    */
   return Math.floor(w0 - (w0 * (p1 - p0)) / (p1 - 100));
    //return Math.floor(w0 - (w0 * (p0 - p1))/(100-p1));
  }