function complexNumberMultiply(num1: string, num2: string): string {
    // 1 + i + i + i^2
    // 1 + 2i + -1
    // 0 + 2i

    // 1 + -i + -i + i^2
    // 1 + -2i + -1
    // 0 + -2i  

    const nums1 = separate(num1)
    const nums2 = separate(num2)

    let a = +nums1[0] * +nums2[0]
    let d = +nums1[1] * +nums2[1] * -1
    let real = a + d

    let b = +nums1[0] * +nums2[1]
    let c = +nums1[1] * +nums2[0]
    let img = b + c

    return `${real}+${img}i`
};

function separate(num: string) {
    const [real, img] = num.split("+")

    return [real, img.replace(/\i/, '')]
}