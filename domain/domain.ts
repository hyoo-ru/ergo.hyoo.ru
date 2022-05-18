namespace $ {

	export class $hyoo_ergo_domain extends $mol_object2 {

		@ $mol_mem
		state() {
			console.log('state instance')
			return new $mol_state_shared
		}

		@ $mol_mem
		index() {
			console.log('index instance')
			const obj = new this.$.$hyoo_ergo_index
			obj.domain = $mol_const(this)
			return obj
		}

	}

}
