// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase,
// just like you see in the newspaper.
//
//     But for a change, let"s do that for each and every word of the given String.
//     Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.
//
// *should work also on Leading and Trailing Spaces and caps.
//
// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space"
// "   space WALK   " => "   Space Walk   "
// Note: you will be provided atleast one word and should take string as input and return string as output.

let n = "APPLEewqqweqwwE#$#$# OOO FFss sAsaADDD of banana";
function dropCap(n) {

    return n.replace(/\S+/g, (word) => {
        // Проверяем, если длина слова больше 2 символов
        if (word.length > 2) {
            // Получаем первую букву слова в верхнем регистре
            const firstLetter = word.charAt(0).toUpperCase();
            // Получаем остальную часть слова в нижнем регистре
            const restOfWord = word.slice(1).toLowerCase();
            // Возвращаем слово с первой буквой в верхнем регистре и остальными буквами в нижнем регистре
            return firstLetter + restOfWord;
        }
        // Если длина слова меньше или равна 2 символам, оставляем его без изменений
        return word;
    });
}


console.log(dropCap(n))