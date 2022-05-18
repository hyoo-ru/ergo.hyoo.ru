namespace $ {

	export class $hyoo_ergo_person extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'hyoo_ergo_person' ).doc( this.id() )
		}

		name(next?: string) {
			return this.state().sub('name').text(next) ?? `Person#${this.id()}`
		}

	}

}
