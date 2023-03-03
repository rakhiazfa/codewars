/**
 * Exes and Ohs
 */

function XO(str) {
    const slices = str.match(/[o|O|x|X]/g);

    return (
        slices?.filter((item) => item.toLowerCase() === "o").length ===
        slices?.filter((item) => item.toLowerCase() === "x").length
    );
}

/**
 * Find the smallest integer in the array
 */

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

/**
 * Fake Binary
 */

function fakeBin(x) {
    const nums = x.split("").reduce((prev, next) => {
        prev.push(next >= 5 ? 1 : 0);
        return prev;
    }, []);

    return nums.join("");
}

/**
 * Lost Without a Map
 */

const maps = (x) => x.map((y) => y * 2);

/**
 * Convert number to reversed array of digits
 */

const digitize = (n) =>
    n
        .toString()
        .split("")
        .map((x) => parseInt(x))
        .reverse();

/**
 * Remove String Spaces
 */

const noSpace = (x) => x.replace(/\s/g, "");

/**
 * Beginner - Reduce but Grow
 */

const grow = (x) => x.reduce((x, y) => x * y);

/**
 * Is he gonna survive?
 */

const hero = (bullets, dragons) => dragons * 2 <= bullets;

/**
 * Reverse words
 */

const reverseWords = (str) =>
    str
        .split(" ")
        .map((x) => x.split("").reverse().join(""))
        .join(" ");

/**
 * Jaden Casing Strings
 */

String.prototype.toJadenCase = function () {
    return this.toString()
        .split(" ")
        .map((x) =>
            x
                .split("")
                .map((y, i) => (i === 0 ? y.toUpperCase() : y))
                .join("")
        )
        .join(" ");
};

/**
 * Are You Playing Banjo?
 */

const areYouPlayingBanjo = (name) =>
    name.charAt(0).toLowerCase() === "r"
        ? name + " plays banjo"
        : name + " does not play banjo";

/**
 * Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
 */

const isSameLanguage = (list) =>
    list.length ===
    list.filter((item) => item.language === list[0].language).length;

/**
 * Calculate average
 */

const findAverage = (array) =>
    array.length > 0 ? array?.reduce((x, y) => x + y) / array.length : 0;

/**
 * Reversed Strings
 */

const solution = (str) => str.split("").reverse().join("");

/**
 * Sum Arrays
 */

const sum = (numbers) =>
    numbers.length > 0 ? numbers.reduce((x, y) => x + y) : 0;
