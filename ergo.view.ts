namespace $.$$ {

	export class $hyoo_ergo extends $.$hyoo_ergo {

		@ $mol_mem
		count(next?: number) {
			return next ?? 0
		}

		rerender() {
			this.count( this.count() + 1 )
		}

		state_holding() {
			console.log('State holding')
			this.domain().index().record('qwe123qwe123qwezzxc_', ['123'])
			this.domain().index().search('hello')
			return this.domain().index().state()
		}

		auto() {
			console.log('Auto')
			this.state_holding()
		}
	}

}
