namespace $ {

	export class $hyoo_ergo_index extends $mol_object2 {
		
		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc('hyoo_ergo_index')
		}

		@ $mol_mem_key
		record(word: string, ids?: string[]) {
			if (ids) console.log(word, JSON.stringify(ids))
			return this.state().sub(word).list( ids ) as string[]
		}

		@ $mol_mem_key3
		update(prev: string, next: string, id: string) {
			const prev_tokens = $hyoo_ergo_index_analyze(prev)
			const next_tokens = $hyoo_ergo_index_analyze(next)

			const added = next_tokens.filter( token => !prev_tokens.includes(token) )
			const removed = prev_tokens.filter( token => !next_tokens.includes(token) )

			for ( const token of added ) {
				this.record(token, [...this.record(token), id])
			}

			for ( const token of removed ) {
				this.record(token, this.record(token).filter( id2 => id2 !== id ))
			}
		}

		@ $mol_mem_key
		search(text: string) {
			const tokens = $hyoo_ergo_index_analyze(text)
			const ids = []

			for ( const token of tokens ) {
				ids.push( ...this.record(token) )
			}

			return ids
		}

	}

}
