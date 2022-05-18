namespace $ {
	export class $hyoo_ergo_request extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'hyoo_ergo_request' ).doc( this.id() )
		}

		moment(next?: $mol_time_moment) {
			const str = this.state().sub('moment').value( next && next.toString() )
			return str ? new $mol_time_moment( String(str) ) : null
		}

		creator(next?: $hyoo_ergo_person) {
			const id = this.state().sub('person').value(next && next.id())
			return id ? this.domain().person( String(id) ) : null
		}

		edition(next?: $hyoo_ergo_edition) {
			const id = this.state().sub('edition').value(next && next.id())
			return id ? this.domain().edition( String(id) ) : null
		}

		comments(next?: $hyoo_ergo_comment[]) {
			const ids = this.state().sub('comments').list(next && next.map( obj => obj.id() ))
			return ids.map( id => this.domain().comment( String(id) ) )
		}

		status(next?: 'review' | 'accepted' | 'rejected') {
			const status = this.state().sub('status').value(next) ?? 'review'
			return (status as typeof next)!
		}

		type(next?: 'create' | 'change' | 'split' | 'join') {
			const type = this.state().sub('type').value(next) ?? 'change'
			return (type as typeof next)!
		}
	}
}
