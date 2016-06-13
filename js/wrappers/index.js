import page from './page'

/**
 * Setup all wrapping components.
 * This looks a little silly but is useful for larger apps with many wrappers for shared components.
 * For example "/dashboard" may have a nav that could be a part of a wrapper since it is shared on
 * anything inside the dashboard.
 */
export default (app) => {
  app.setup(page)
}
