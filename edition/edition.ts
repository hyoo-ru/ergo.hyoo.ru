namespace $ {
	export class $hyoo_ergo_edition extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'hyoo_ergo_edition' ).doc( this.id() )
		}

		content(next?: string) {
			return this.state().sub('content').text(next) ?? ''
		}

		request(next?: $hyoo_ergo_request) {
			const id = this.state().sub('request').value(next && next.id())
			return id ? this.domain().request( String(id) ) : null
		}

		prev(next?: $hyoo_ergo_edition) {
			const id = this.state().sub('prev').value(next && next.id())
			return id ? this.domain().edition( String(id) ) : null
		}

		next(next?: $hyoo_ergo_edition) {
			const id = this.state().sub('next').value(next && next.id())
			return id ? this.domain().edition( String(id) ) : null
		}
	}
}
