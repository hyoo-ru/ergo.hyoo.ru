namespace $ {

	export function $hyoo_ergo_index_analyze(text: string): string[] {
		return text.toLowerCase().replace(/[^a-zа-яё0-9]/gi, ' ').replace(/[\s\n]+/g, ' ').trim().split(' ').filter( str => str.length > 1 )
	}

}
