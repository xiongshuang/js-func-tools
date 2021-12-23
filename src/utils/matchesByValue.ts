// 根据value匹配字符串（搜索字符串并替换，做高亮使用）
type Fn = (value: string, search: string, jointStart: string, jointEnd: string) => string
const matchesByValue: Fn = (value, search, jointStart, jointEnd) => {
    const reg = new RegExp(search, 'ig');
    const arr = [];
    let str = value,
        matches = reg.exec(value),
        index = 0;
    while (matches && matches[0]) {
        const res = str.substring(0, matches.index - index);
        arr.push(res, `${jointStart}${matches[0]}${jointEnd}`);
        index = matches.index + matches[0].length;
        str = str.substring(res.length + matches[0].length);
        matches = reg.exec(value);
    }
    arr.push(str);
    return arr.join('');
};

export default matchesByValue;