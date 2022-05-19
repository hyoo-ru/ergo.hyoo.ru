namespace $ {

	export class $hyoo_ergo_domain extends $mol_object2 {

		@ $mol_mem
		state() {
			const obj = new $mol_state_shared
			return obj
		}

		@ $mol_mem_key
		person(id: string) {
			const obj = new this.$.$hyoo_ergo_person
			obj.id = $mol_const(id)
			obj.domain = $mol_const(this)
			return obj
		}

		@ $mol_mem
		thesis() {
			const obj = new this.$.$hyoo_ergo_thesis_service
			obj.domain = $mol_const(this)
			return obj
		}

		@ $mol_mem
		request() {
			const obj = new this.$.$hyoo_ergo_request_service
			obj.domain = $mol_const(this)
			return obj
		}

		@ $mol_mem
		edition() {
			const obj = new this.$.$hyoo_ergo_edition_service
			obj.domain = $mol_const(this)
			return obj
		}

		@ $mol_mem_key
		comment(id: string) {
			const obj = new this.$.$hyoo_ergo_comment
			obj.id = $mol_const(id)
			obj.domain = $mol_const(this)
			return obj
		}

		@ $mol_mem
		user() {
			
			let id = this.$.$mol_store_local.value( 'user' ) as string | null
			if( !id ) {
				id = $mol_guid()
				new $mol_after_tick( ()=> this.$.$mol_store_local.value( 'user', id ) )
			}
			
			return this.person( id )
		}

		@ $mol_mem
		index() {
			console.log('index instance')
			const obj = new this.$.$hyoo_ergo_index
			obj.domain = $mol_const(this)
			obj.destructor = () => {
				console.log('index descruct')
			}
			return obj
		}

	}

}
