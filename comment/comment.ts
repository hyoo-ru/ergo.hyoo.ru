namespace $ {
	export class $hyoo_ergo_comment extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'hyoo_ergo_comment' ).doc( this.id() )
		}

		message(next?: string) {
			return this.state().sub('message').text(next) ?? ''
		}

		moment(next?: $mol_time_moment) {
			const str = this.state().sub('moment').value( next && next.toString() )
			return str ? new $mol_time_moment( String(str) ) : null
		}

		creator(next?: $hyoo_ergo_person) {
			const id = this.state().sub('person').value(next && next.id())
			return id ? this.domain().person( String(id) ) : null
		}
	}
}
