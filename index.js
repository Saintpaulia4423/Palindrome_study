module.exports = Phrase;

String.prototype.reverse = (string) => {
    return Array.from(this).reverse().join("");
}

String.prototype.blank = function () {
    return /^\S*$/.test(this);
}

// Phraseオブジェクトの定義
function Phrase(content) {
    this.content = content;

    // 文字列を小文字に変換する
    this.processer = function (string) {
        return string.toLowerCase();
    }

    // パリンドロームのテスト用に変換したcontentを返す
    this.processedContent = function processedContent() {
        return this.processer(this.content);
    }

    // パリンドロームならtrueを、違うならfalseを返す
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    };
}

// TranslatedPhraseオブジェクトを定義する
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // パリンドロームのテスト用に変換した訳文を返す
    this.processedContent = function processedContent() {
        return this.processer(this.translation);
    }
}
TranslatedPhrase.prototype = new Phrase();
