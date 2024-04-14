
type A = number & string; // A = never

function fn(): never {
    throw new Error('error');
}

try {
    fn();
} catch (error) {
    console.log(error.message);
}

// 函数体内有死循环 也可以使用never
// 不是没有返回值 而是没有正常返回值


// never bottom type 最底层的类型
// never 类型在联合类型下会直接被忽略

type B = string | never; // B = string
type C = string | number | never; // C = string | number


type Skills = '唱' | '跳' | 'rap' | '篮球' | 'xxxx';

function fn1(skills: Skills): void {
    switch (skills) {
        case "唱":
            break
        case "跳":
            break;
        case "rap":
            break;
        case "篮球":
            break;
        case "xxxx":
            break
        default:
            // 兜底的逻辑 never的用法
            // 不能将类型“string”分配给类型“never”。
            const error: never = skills;
            break;
    }
}