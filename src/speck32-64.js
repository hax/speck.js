function encrypt(plaintext, key) {
	var x = plaintext[0], y = plaintext[1]
	var k = key[3]
	var l0 = key[2]
	var l1 = key[1]
	var l2 = key[0]
	for (var i = 0; i < 21;) {
		x = (x << 9 | x >>> 7) + y & 0xffff ^ k
		y = (y << 2 | y >>> 14) & 0xffff ^ x
		l0 = (l0 << 9 | l0 >>> 7) + k & 0xffff ^ i
		k = (k << 2 | k >>> 14) & 0xffff ^ l0
		i++
		x = (x << 9 | x >>> 7) + y & 0xffff ^ k
		y = (y << 2 | y >>> 14) & 0xffff ^ x
		l1 = (l1 << 9 | l1 >>> 7) + k & 0xffff ^ i
		k = (k << 2 | k >>> 14) & 0xffff ^ l1
		i++
		x = (x << 9 | x >>> 7) + y & 0xffff ^ k
		y = (y << 2 | y >>> 14) & 0xffff ^ x
		l2 = (l2 << 9 | l2 >>> 7) + k & 0xffff ^ i
		k = (k << 2 | k >>> 14) & 0xffff ^ l2
		i++
	}
	x = (x << 9 | x >>> 7) + y & 0xffff ^ k
	y = (y << 2 | y >>> 14) & 0xffff ^ x
	return [x, y]
}

exports.encrypt = encrypt
